/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */

import React, {useEffect, useMemo, useRef, useState, ReactNode} from 'react';
import {ScrollView, View, StyleProp, ViewStyle} from 'react-native';
import type {NativeSyntheticEvent, NativeScrollEvent} from 'react-native';

const calcResponsiveGrid = (
  data: TileItem[],
  maxItemsPerColumn: number,
  containerWidth: number,
  itemUnitHeight?: number,
): {
  gridItems: GridItem[];
  gridViewHeight: number;
} => {
  const gridItems: GridItem[] = [];
  const itemSizeUnit = containerWidth / maxItemsPerColumn; // Determine TileSize based on container width and max number of columns
  let columnHeights: number[] = new Array(maxItemsPerColumn).fill(0); // Track the height of each column end.

  data.forEach(item => {
    const widthRatio = item.widthRatio || 1;
    const heightRatio = item.heightRatio || 1;

    const itemWidth = widthRatio * itemSizeUnit;

    const itemHeight = itemUnitHeight
      ? itemUnitHeight * heightRatio
      : heightRatio * itemSizeUnit; // Use itemUnitHeight if provided, else fallback to itemSizeUnit

    // Find the column where the item should be placed.
    let columnIndex = findColumnForItem(
      columnHeights,
      widthRatio,
      maxItemsPerColumn,
    );

    // Calculate item's top and left positions.
    const top = columnHeights[columnIndex]!;
    const left = columnIndex * itemSizeUnit;

    // Place the item.
    gridItems.push({
      ...item,
      top,
      left,
      width: itemWidth,
      height: itemHeight,
    });

    // Update the column heights for the columns that the item spans.
    // This needs to accommodate the actual height used (itemHeight).
    for (let i = columnIndex; i < columnIndex + widthRatio; i++) {
      columnHeights[i] = top + itemHeight; // Update to use itemHeight
    }
  });

  // Calculate the total height of the grid.
  const gridViewHeight = Math.max(...columnHeights);

  return {
    gridItems,
    gridViewHeight,
  };
};

const findColumnForItem = (
  columnHeights: number[],
  widthRatio: number,
  maxItemsPerColumn: number,
) => {
  // If the item spans only one column, find the shortest column.
  if (widthRatio === 1) {
    return columnHeights.indexOf(Math.min(...columnHeights));
  }

  // If the item spans multiple columns, find the first place it can fit.
  let minHeight = Math.min(...columnHeights);
  let columnIndex = columnHeights.indexOf(minHeight);

  for (let i = 0; i <= maxItemsPerColumn - widthRatio; i++) {
    // Check if the item can fit in the next 'widthRatio' columns.
    const columnsToCheck = columnHeights.slice(i, i + widthRatio);
    if (columnsToCheck.every(height => height === minHeight)) {
      columnIndex = i;
      break;
    }

    // Find the next set of columns where the item can fit.
    minHeight = Math.min(...columnsToCheck);
  }

  return columnIndex;
};

export interface ResponsiveGridProps {
  renderItem: (item: TileItem, index: number) => ReactNode;
  data: TileItem[];
  maxItemsPerColumn: number;
  scrollEventInterval?: number;
  virtualization?: boolean;
  virtualizedBufferFactor?: number;
  showScrollIndicator?: boolean;
  style?: StyleProp<ViewStyle>;
  itemContainerStyle?: StyleProp<ViewStyle>;
  itemUnitHeight?: number;
  onEndReached?: () => void;
}

export interface TileItem {
  widthRatio?: number;
  heightRatio?: number;
  [key: string]: any;
}

export interface GridItem extends TileItem {
  top: number;
  left: number;
  width: number;
  height: number;
}

export const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  data = [],
  maxItemsPerColumn = 3,
  virtualizedBufferFactor = 5,
  renderItem,
  scrollEventInterval = 200, // milliseconds
  virtualization = true,
  showScrollIndicator = true,
  style = {},
  itemContainerStyle = {},
  itemUnitHeight,
  onEndReached,
}) => {
  const [visibleItems, setVisibleItems] = useState<TileItem[]>([]);
  const throttleScrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  const scrollYPosition = useRef<number>(0);

  const {gridViewHeight, gridItems} = useMemo(
    () =>
      calcResponsiveGrid(
        data,
        maxItemsPerColumn,
        containerWidth,
        itemUnitHeight,
      ),
    [data, maxItemsPerColumn, containerWidth],
  );

  const renderedItems = virtualization ? visibleItems : gridItems;

  const updateVisibleItems = () => {
    if (!virtualization) {
      return;
    }

    // Buffer to add outside visible range
    const buffer = containerHeight * virtualizedBufferFactor;

    // Define the range of items that are visible based on scroll position
    const visibleStart = Math.max(0, scrollYPosition.current - buffer);
    const visibleEnd = scrollYPosition.current + containerHeight + buffer;

    const vItems = gridItems.filter((item: TileItem) => {
      const itemBottom = item.top + item.height;
      const itemTop = item.top;
      // Check if the item is within the adjusted visible range, including the buffer
      return itemBottom > visibleStart && itemTop < visibleEnd;
    });

    setVisibleItems(vItems);
    return vItems;
  };

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {contentSize, layoutMeasurement, contentOffset} = event.nativeEvent;
    const paddingToBottom = 20; // Adjust padding as needed

    const isCloseToBottom =
      contentSize.height - layoutMeasurement.height - contentOffset.y <=
      paddingToBottom;
    if (isCloseToBottom) {
      onEndReached?.();
    }
    // If virtualization is disabled, return
    if (!virtualization) {
      return;
    }

    const currentScrollY = contentOffset.y;

    scrollYPosition.current = currentScrollY;

    // Throttling logic
    if (throttleScrollTimeout.current !== null) {
      return;
    }

    throttleScrollTimeout.current = setTimeout(() => {
      updateVisibleItems();

      throttleScrollTimeout.current = null;
    }, scrollEventInterval);
  };

  useEffect(() => {
    if (virtualization) {
      updateVisibleItems();
    }
  }, [gridItems, containerHeight, containerWidth, virtualization]);

  return (
    <View
      style={[{flexGrow: 1}, style]}
      onLayout={event => {
        const {width, height} = event.nativeEvent.layout;
        setContainerWidth(width);
        setContainerHeight(height);
      }}>
      <ScrollView
        onScroll={onScroll}
        scrollEventThrottle={32}
        contentContainerStyle={{
          height: gridViewHeight,
          width: containerWidth,
        }}
        showsVerticalScrollIndicator={showScrollIndicator}>
        <View
          style={{
            height: gridViewHeight,
            width: containerWidth,
          }}>
          {renderedItems.map((item, index) => (
            <View
              key={index}
              style={[
                {
                  position: 'absolute',
                  top: item.top,
                  left: item.left,
                  width: item.width,
                  height: item.height,
                },
                itemContainerStyle,
              ]}>
              {renderItem(item, index)}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
