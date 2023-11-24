import { DeviceType } from '../types/record.result.types';

// 접속 기기 정보 가져오기
export const getDevice = (): DeviceType => {
  let agent_str = navigator.userAgent;
  // Android
  if (/Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(agent_str)) {
    return 'ANDROID';
  }
  // Iphone
  if (/iPhone|iPad|iPod/i.test(agent_str)) {
    return 'IPHONE';
  }
  // Windows
  if (/Windows/i.test(agent_str)) {
    return 'WINDOWS';
  }
  // MAC
  if (/MAC/i.test(agent_str)) {
    return 'MAC';
  }
  // 나머지는 임의로 안드로이드로 해놓겠음.
  return 'ANDROID';
};
