import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  Image,
  Dimensions,
} from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useDownloadPayslip } from '../../hooks/useDownloadPaySlip';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { getFileType } from '../../utils/helper';
import styles from './styles';
import { WebView } from 'react-native-webview';

const PayslipDetails: React.FC = () => {
  const payslip = useSelector((state: RootState) => state.payslip.selectedPayslip);
  const { downloadPayslip } = useDownloadPayslip();

  const [previewVisible, setPreviewVisible] = useState(false);
  const [isPdf, setIsPdf] = useState(false);

  const handlePreview = () => {
    if (!payslip) return;
    const fileType = getFileType(payslip);
    setIsPdf(fileType === 'PDF');
    setPreviewVisible(true);
  };

  if (!payslip) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Feather name="file-text" size={48} color="#aaa" />
        <Text style={styles.emptyText}>No payslip selected</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Payslip Details</Text>

      <View style={styles.card}>
        {/* Payslip ID */}
        <View style={styles.row}>
          <Feather name="hash" size={18} color="#6b7280" />
          <Text style={styles.label}>Payslip ID</Text>
        </View>
        <Text style={styles.value}>{payslip.id}</Text>

        {/* Period */}
        <View style={styles.row}>
          <Feather name="calendar" size={18} color="#6b7280" />
          <Text style={styles.label}>Period</Text>
        </View>
        <Text style={styles.value}>
          {payslip.fromDate} – {payslip.toDate}
        </Text>

        {/* File Type */}
        <View style={styles.row}>
          <Feather name="file" size={18} color="#6b7280" />
          <Text style={styles.label}>File Type</Text>
        </View>
        <Text style={styles.value}>{getFileType(payslip)}</Text>

        {/* Preview Button */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.buttonWrapper}
          onPress={handlePreview}
        >
          <LinearGradient
            colors={['#10B981', '#34D399']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.button}
          >
            <Feather name="eye" size={18} color="#fff" style={{ marginRight: 8 }} />
            <Text style={styles.buttonText}>Preview Payslip</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Download Button */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.buttonWrapper}
          onPress={() => downloadPayslip(payslip)}
        >
          <LinearGradient
            colors={['#4F46E5', '#6366F1']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.button}
          >
            <Feather name="download" size={18} color="#fff" style={{ marginRight: 8 }} />
            <Text style={styles.buttonText}>Download Payslip</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* Preview Modal */}
      <Modal
        visible={previewVisible}
        animationType="slide"
        transparent={false}
        onRequestClose={() => setPreviewVisible(false)}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setPreviewVisible(false)}
          >
            <Feather name="x" size={26} color="#fff" />
          </TouchableOpacity>

          {isPdf ? (
            <WebView
              source={typeof payslip.file === 'number'
                ? payslip.file
                : { uri: payslip.file } as any}
              style={{ flex: 1 }}
            />
          ) : (
            <Image
              source={typeof payslip.file === 'number'
                ? payslip.file
                : { uri: payslip.file }}
              style={styles.previewImage}
              resizeMode="contain"
            />
          )}
        </View>
      </Modal>
    </ScrollView>
  );
};

export default PayslipDetails;
