import React, {useState, forwardRef, useImperativeHandle} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Modal, {ModalContent} from 'react-native-modals';
import LottieView from 'lottie-react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import {lotties} from '../../assets/lottie';
const SupperAlert = forwardRef((props, ref) => {
  const {title, message, isSucces, onClose} = props;
  const [isShow, setIsShow] = useState(false);
  useImperativeHandle(ref, () => ({
    closeModal() {
      setIsShow(false);
    },
    openModal() {
      setIsShow(true);
    },
  }));

  return (
    <Modal
      width={0.5}
      height={230}
      onDismiss={() => {
        ref.current.closeModal();
      }}
      onTouchOutside={() => {
        ref.current.closeModal();
      }}
      swipeDirection="down"
      // onSwipeOut={() => close()}
      visible={isShow}>
      <ModalContent>
        <Text style={styles.tile}>{title}</Text>
        <Text numberOfLines={2} style={styles.message}>
          {message}
        </Text>
        <LottieView
          style={styles.icon}
          source={isSucces ? lotties.success : lotties.errors}
          autoPlay
          loop={false}
        />

        <TouchableOpacity
          onPress={() => {
            onClose();
            ref.current.closeModal();
          }}
          style={[
            styles.button,
            // eslint-disable-next-line react-native/no-inline-styles
            {backgroundColor: isSucces ? '#7ED321' : 'red'},
          ]}>
          <Text style={styles.txtButton}>
            {isSucces ? 'Tiếp tục' : 'Thử lại'}
          </Text>
        </TouchableOpacity>
      </ModalContent>
    </Modal>
  );
});
SupperAlert.propTypes = {
  isShow: PropTypes.bool,
  isSucces: PropTypes.bool,
  title: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
};
SupperAlert.defaultProps = {
  isShow: false,
  isSucces: true,
  title: 'Tiêu đề',
  message: 'Thông báo',
  onClose: () => {},
};
export default SupperAlert;
