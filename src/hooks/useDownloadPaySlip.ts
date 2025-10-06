import { useCallback } from 'react';
import { Alert, Platform } from 'react-native';
import { File, Directory, Paths } from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import { Asset } from 'expo-asset';

export const useDownloadPayslip = () => {
  const downloadPayslip = useCallback(async (payslip: { file: any; fileName: string }) => {
    if (!payslip) {
      Alert.alert('Error', 'No payslip selected');
      return;
    }

    try {
      const { file, fileName } = payslip;

      // 1️⃣ Load the file (local or remote)
      const asset =
        typeof file === 'number' ? Asset.fromModule(file) : Asset.fromURI(file);
      await asset.downloadAsync();

      if (!asset.localUri) throw new Error('Failed to load file');
      const localUri = asset.localUri;

      // 2️⃣ Android: Save to public Downloads folder
      if (Platform.OS === 'android') {
        const { status } = await MediaLibrary.requestPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permission required', 'Cannot save file without permission.');
          return;
        }

        const assetObj = await MediaLibrary.createAssetAsync(localUri);
        await MediaLibrary.createAlbumAsync('Download', assetObj, false);

        Alert.alert('Download Complete', `Saved to Downloads as ${fileName}`);

        if (await Sharing.isAvailableAsync()) {
          await Sharing.shareAsync(assetObj.uri);
        } else {
          Alert.alert('Saved', 'File saved in Downloads folder.');
        }
      }

      // 3️⃣ iOS: Save to app’s Documents
      else {
        const documentDir = new Directory(Paths.document);
        const destFile = new File(Paths.join(documentDir.uri, fileName));
        destFile.create();

        Alert.alert('Saved', 'File saved successfully.');
      }
    } catch (err) {
      console.error('Download failed:', err);
      Alert.alert('Error', 'Could not save or open the payslip file.');
    }
  }, []);

  return { downloadPayslip };
};
