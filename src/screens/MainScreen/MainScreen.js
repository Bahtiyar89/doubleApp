import React, {useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Modal,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Loading from '../../components/Loading';
import obj from './obj';
import styles from './styles';

const MainScreen = () => {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [opt, setOtp] = useState(obj);
  const [scan, setScan] = useState(false);
  const [result, setResult] = useState('');
  useEffect(() => {
    const timer = setInterval(() => {
      setLoading(true);
      var arr = [];
      for (let index = 0; index < 5; index++) {
        const element = Math.floor(Math.random(1000000) * 1000000);
        arr.push({name: obj[index]?.name, dig: element});
      }
      setOtp(arr);
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const onSuccess = e => {
    setResult(e.data);
    setScan(false);
  };

  const startScan = () => {
    setScan(true);
    setResult();
  };

  return (
    <SafeAreaView style={styles.wr}>
      <Loading loading={loading} />
      {scan ? (
        <QRCodeScanner reactivate={true} showMarker={true} onRead={onSuccess} />
      ) : (
        <>
          {opt.map(item => (
            <View key={item.dig}>
              <Text>{item.name}</Text>
              <Text style={{fontWeight: '700'}}>{item.dig}</Text>
            </View>
          ))}

          <TouchableOpacity style={styles.btn} onPress={() => setModal(true)}>
            <Image
              style={styles.img}
              source={require('../../assets/plus.png')}
            />
          </TouchableOpacity>

          <Modal
            transparent={true}
            animationType={'none'}
            visible={modal}
            onRequestClose={() => {
              console.log('close modal');
            }}>
            <View style={styles.modalBackground}>
              <View style={styles.activityIndicatorWrapper}>
                <Text>Enter a name</Text>
                <TextInput
                  style={styles.inp}
                  onChangeText={val => setResult(val)}
                  value={result}
                />
                <TouchableOpacity style={styles.camTxt} onPress={startScan}>
                  <Text style={{color: 'blue'}}>useCamera</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.clTxt}
                  onPress={() => setModal(false)}>
                  <Text style={{color: 'blue'}}>close modal</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </>
      )}
    </SafeAreaView>
  );
};

export default MainScreen;
