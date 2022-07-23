import { Heading, NativeBaseProvider, VStack } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { THEME } from './src/styles/theme';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      {
        fontsLoaded
          ? (
            <VStack
              flex={1}
              alignItems="center"
              bg="gray.600"
              px={8}
              pt={24}
            >
              <Heading
                color='gray.100'
                fontSize='xl'
                mt={20}
                mb={6}
              >
                Hello world
              </Heading>
            </VStack>

          )
          : <Loading />
      }
    </NativeBaseProvider>
  );
}

