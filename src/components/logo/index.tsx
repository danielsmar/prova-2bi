import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import { useMemo } from 'react';

interface LogoProps {
  width?: number;
  backgroundColor?: string;
}

export function Logo({
  width = 40,

}: LogoProps) {
  const height = useMemo(() => width * 0.6623, [width]);

  return (
    <Box display="flex" justifyContent="center">
      <Image src="/logo-web.svg" width={width} height={height} alt="logo" />
    </Box>
  );
}
