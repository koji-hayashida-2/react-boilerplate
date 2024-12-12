import {FC, ReactNode} from 'react';
import {Container} from '@mui/material';

interface LoginContentsWrapperProps {
  children: ReactNode;
}

const LoginContentsContainer: FC<LoginContentsWrapperProps> = ({children}) => {
  return (
      <Container
          maxWidth={false} // 親要素に対して幅を100%にする
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
export default LoginContentsContainer;