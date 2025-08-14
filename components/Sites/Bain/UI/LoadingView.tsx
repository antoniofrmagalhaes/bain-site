import { Box, Spinner } from '@chakra-ui/react';

export default function LoadingView() {
  return (
    <Box height="100vh" display="flex" justifyContent="center" alignItems="center">
      <Spinner size="xl" color="brand.500" />
    </Box>
  );
}
