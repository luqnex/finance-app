import { Dispatch, SetStateAction, useState } from "react";

import { Text, TouchableOpacity, View } from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";

import { styles } from "./styles";

type DatePickerProps = {
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
};

export const DatePicker = ({ date, setDate }: DatePickerProps) => {
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const formatDate = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const correctlyDay = day.toString().padStart(2, "0");
    const correctlyMonth = month.toString().padStart(2, "0");

    return `${correctlyDay}/${correctlyMonth}/${year}`;
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.inputDatePicker}
        onPress={() => setShow(true)}
      >
        <Text>{formatDate(date)}</Text>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"date"}
          is24Hour={true}
          onChange={onChange}
          dateFormat={"day month year"}
        />
      )}
    </View>
  );
};
