import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F9FAFB",
        paddingHorizontal: 20,
        paddingTop: 24,
    },
    title: {
        fontSize: 22,
        fontWeight: "700",
        color: "#111827",
        marginBottom: 20,
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 14,
        paddingVertical: 16,
        paddingHorizontal: 18,
        marginBottom: 14,
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
        elevation: 2,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 6,
    },
    rowBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 4,
    },
    dateText: {
        fontSize: 16,
        fontWeight: "500",
        color: "#111827",
        marginLeft: 8,
    },
    fileTypeTag: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#EEF2FF",
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 4,
    },
    fileTypeText: {
        fontSize: 12,
        fontWeight: "600",
        color: "#4F46E5",
        marginLeft: 4,
    },
    emptyContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 80,
    },
    emptyText: {
        color: "#6B7280",
        fontSize: 16,
        marginTop: 10,
    },
});