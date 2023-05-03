import React, {
  useCallback,
  useRef,
  useMemo,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import {View, Modal, Keyboard} from 'react-native';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';

interface IBaseBottomSheetProps {
  children: ReactNode;
  isOpen: boolean;
  initialSnapPoints?: string[];
}

const BaseBottomSheet: React.FC<IBaseBottomSheetProps> = props => {
  const {children, isOpen, initialSnapPoints} = props;
  // hooks
  const sheetRef = useRef<BottomSheet>(null);
  const [visibleModal, setVisibleModal] = useState<boolean>(false);

  const snapPoints = useMemo(() => initialSnapPoints, []);

  // callbacks
  const handleSheetChange = useCallback((index: any) => {
    console.log('handleSheetChange', index);
  }, []);

  const handleSnapPress = useCallback((index: any) => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  const onCloseSheet = useCallback(() => {
    setVisibleModal(false);
  }, []);

  useEffect(() => {
    const listener = Keyboard.addListener('keyboardDidShow', () =>
      handleSnapPress(1),
    );
    return () => {
      listener.remove();
    };
  }, []);

  useEffect(() => {
    setVisibleModal(isOpen);
  }, [isOpen]);

  const renderBackdrop = useCallback(
    (props: any) => <BottomSheetBackdrop {...props} />,
    [],
  );

  return (
    <Modal transparent visible={visibleModal}>
      <View
        style={{
          flex: 1,
          position: 'absolute',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.6)',
          width: '100%',
        }}>
        <BottomSheet
          ref={sheetRef}
          index={0}
          snapPoints={snapPoints as string[]}
          onClose={() => onCloseSheet()}
          onChange={handleSheetChange}
          backdropComponent={renderBackdrop}>
          {props.children}
        </BottomSheet>
      </View>
    </Modal>
  );
};

export default BaseBottomSheet;
