import React from 'react';
import 'src/App.css';
import { Box, Text } from 'src/components';


function App() {
  return (
    <Box className="App">
      <Box mt="0.75rem" color="secondary" width="100%" bg="primary" px="1.25rem" py="0.75rem">
        <Text>Hello world</Text>
      </Box>
    </Box>
  );
}

export default App;
