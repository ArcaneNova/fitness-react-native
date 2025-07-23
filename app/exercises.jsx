import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react'
import {View, Text, Touchable} from "react-native";
import {demoExercises} from "../constants";

function Exercises() {
    const router = useRouter();
    const [exercises, setExercises] = useState(demoExercises);
    const item = useLocalSearchParams();
    
    useEffect(()=>{
        if(item) getExercises(item.name);
    }, [item]);

    const getExercises = async (bodypart) => {
        let data = await fetchExercisesByBodypart(bodypart);

        setExercises(data);
    }
  return (
    <View className="mt-20">
        <Text>Exercises</Text>
        <TouchableOpacity onPress={()=> router.back()}>
            <Text>go back</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Exercises;