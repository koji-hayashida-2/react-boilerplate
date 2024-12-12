import {FC, ReactNode} from 'react';
import {Container} from '@mui/material';

interface CommonContentsWrapperProps {
  children: ReactNode;
}

const CommonContentsContainer: FC<CommonContentsWrapperProps> = ({children}) => {
  return (
      <Container
          maxWidth={false}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            padding: 2,
          }}
      >
        {children}
      </Container>
  );
};
export default CommonContentsContainer;