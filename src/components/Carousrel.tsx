import React, { useCallback, useState, useRef } from "react";
import { FlatList, View, NativeScrollEvent, NativeSyntheticEvent } from "react-native";
import { Slide } from "components";

const slideList = [
  {
    id: 1,
    image: "https://i.ibb.co/q5P4fVz/on-Boarding1.png",
    title: "Cash on Delivery or E-payment",
    subtitle: "Our delivery will ensure your items are delivered right to the door steps",
  },
  {
    id: 2,
    image: "https://i.ibb.co/hVFkwgq/on-Boarding2.png",
    title: "Delivery Right to Your Door Step",
    subtitle: "Our delivery will ensure your items are delivered right to the door steps",
  },
  {
    id: 3,
    image: "https://i.ibb.co/TvWqGJ5/on-Boarding3.png",
    title: "Welcome to Tracky",
    subtitle: "Tracky is the best solution to deliver and track goods from local and world shipping.",
  },
];

function Pagination({ index }: { index: number }) {
  return (
    <View className="absolute flex-row justify-center w-full bottom-8 " pointerEvents="none">
      {slideList.map((_, i) => {
        return <View key={i} className={`${index === i ? "bg-black" : "bg-dotBg"} mx-2 w-2 h-2 rounded `} />;
      })}
    </View>
  );
}
const Carousrel = () => {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  indexRef.current = index;
  const onScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);

    const distance = Math.abs(roundIndex - index);

    // Prevent one pixel triggering setIndex in the middle
    // of the transition. With this we have to scroll a bit
    // more to trigger the index change.
    const isNoMansLand = 0.4 < distance;

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex);
    }
  }, []);

  // Use the index

  return (
    <View className="relative flex-1 max-h-[75%]">
      <FlatList
        data={slideList}
        style={{ flex: 1 }}
        horizontal
        pagingEnabled
        onScroll={onScroll}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Slide data={item} />;
        }}
      />
      <Pagination index={index}></Pagination>
    </View>
  );
};

export default Carousrel;
