import './SpinLoader.scss';
import { Flex, Spin } from 'antd';

export const SpinLoader = () => {
  return (
    <Flex className="spin-loader" align="center" justify="center">
      <Spin size="large" />
    </Flex>
  );
};
