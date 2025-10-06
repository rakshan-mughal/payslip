export const getFileType = (payslip: any): string => {
    const fname = payslip?.fileName?.toLowerCase();
    if (!fname) return 'Unknown';
    if (fname.endsWith('.pdf')) return 'PDF';
    if (fname.endsWith('.jpg') || fname.endsWith('.jpeg') || fname.endsWith('.png'))
        return 'Image';
    return 'Unknown';
};