import React from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setSelectedPayslip } from "../../redux/slices/payslipSlice";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";

const PayslipList = () => {
    const payslips = useSelector((state: RootState) => state.payslip.payslips);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleSelectPayslip = (id: string) => {
        dispatch(setSelectedPayslip(id));
        navigation.navigate("Payslip Details" as never);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Payslips</Text>

            {payslips.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <Feather name="inbox" size={48} color="#9CA3AF" />
                    <Text style={styles.emptyText}>No payslips available</Text>
                </View>
            ) : (
                <FlatList
                    data={payslips}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => handleSelectPayslip(item.id)}
                            activeOpacity={0.9}
                            style={styles.card}
                        >
                            <View style={styles.row}>
                                <Feather name="calendar" size={20} color="#6366F1" />
                                <Text style={styles.dateText}>
                                    {item.fromDate} – {item.toDate}
                                </Text>
                            </View>

                            <View style={styles.rowBetween}>
                                <View style={styles.fileTypeTag}>
                                    <Feather name="file-text" size={14} color="#4F46E5" />
                                    <Text style={styles.fileTypeText}>
                                        {item.fileName?.split(".").pop()?.toUpperCase() ?? "FILE"}
                                    </Text>
                                </View>
                                <Feather name="chevron-right" size={20} color="#9CA3AF" />
                            </View>
                        </TouchableOpacity>
                    )}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    showsVerticalScrollIndicator={false}
                />
            )}
        </View>
    );
};

export default PayslipList;
