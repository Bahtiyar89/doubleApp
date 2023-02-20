import React from 'react';
import {View, Modal, ActivityIndicator} from 'react-native';
import styles from './styles';

const Loading = props => {
  const {loading} = props;

  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => {
        console.log('close modal');
      }}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator size={'large'} animating={loading} />
        </View>
      </View>
    </Modal>
  );
};

export default Loading;
