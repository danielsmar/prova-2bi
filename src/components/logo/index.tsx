import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import { useMemo } from 'react';

interface LogoProps {
  width?: number;
  backgroundColor?: string;
}

export function Logo({
  width = 100,

}: LogoProps) {
  const height = useMemo(() => width * 0.6623, [width]);

  return (
    <Box display="flex" justifyContent="center" as='a' href='/'>
      <Image src="/logo-web.png" width={width} height={height} alt="logo" />
    </Box>
  );
}
