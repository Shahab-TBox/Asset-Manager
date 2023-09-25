import React from 'react';
import ScannerButton from '../ScannerButton/ScannerButton';
import AssetButton from '../AssetButton/AssetButton';
import {FlatList, Text} from 'react-native';
import UpdationButton from '../UpdationButton/UpdationButton';

var isAssetButton = false;
var isScannerButton = false;
const AssetList = dataa => {
  if (dataa.title == 'Scan assets') {
    isScannerButton = true;
    isAssetButton = false;
  } else if (dataa.title == 'Add assets') {
    isScannerButton = false;
    isAssetButton = true;
  } else if (dataa.title == 'Update assets') {
    isScannerButton = false;
    isAssetButton = false;
  }

  return (
    <FlatList
      horizontal={true}
      data={dataa.data}
      renderItem={item => renderAssetButton(item)}
    />
  );
};
function renderAssetButton(item) {
  // console.log(item.item.img);
  return isAssetButton ? (
    <AssetButton text={item.item.text} img={item.item.img} />
  ) : isScannerButton ? (
    <ScannerButton text={item.item.text} img={item.item.img} />
  ) : (
    <UpdationButton text={item.item.text} img={item.item.img} />
  );
}

export default AssetList;
