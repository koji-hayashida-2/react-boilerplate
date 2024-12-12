import {FC, useState} from 'react';
import LoginModal from '../../components/common/LoginModal/LoginModal.tsx';
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
// import SignUpModal from './components/SignUpModal/S';
import {Button, Box} from '@mui/material';
import LoginContentsContainer from "../../components/layout/LoginContentsContainer.tsx";

export const LoginPage: FC = () => {
  const [modalFlags, setModalFlags] = useState({login: false, signUp: false});


  /**
   *  ログインモーダルを開く
   */
  const handleLoginClick = () => {
    setModalFlags({login: true, signUp: false});
  };

  // /**
  //  *  サインアップモーダルを開く
  //  */
  // const handleSignUpClick = () => {
  //   setModalFlags({ login: false, signUp: true });
  // };

  /**
   *  全モーダルを閉じる
   */
  const handleCloseModals = () => {
    setModalFlags({login: false, signUp: false});
  };

  return (
      <LoginContentsContainer>
        <Box>
          <Box textAlign="center">
            <div>
              <a href="https://vite.dev" rel='noreferrer'>
                <img src={viteLogo} className="logo" alt="Vite logo"/>
              </a>
              <a href="https://react.dev" rel='noreferrer'>
                <img src={reactLogo} className="logo react" alt="React logo"/>
              </a>
            </div>
            <h1>Vite + React Boilerplate</h1>
            <Box textAlign="center">
              <Button
                  variant="contained"
                  color="primary"
                  onClick={handleLoginClick}
                  sx={{marginRight: 2}}
              >
                ログイン
              </Button>
              {/*<Button*/}
              {/*    variant="outlined"*/}
              {/*    color="primary"*/}
              {/*    onClick={handleSignUpClick}*/}
              {/*>*/}
              {/*  ユーザー登録*/}
              {/*</Button>*/}
            </Box>
          </Box>

          {/* ログイン用モーダル */}
          <LoginModal

              show={modalFlags.login}
              handleClose={handleCloseModals}
          />

          {/* サインアップ用モーダル */}
          {/*<SignUpModal*/}
          {/*    show={modalFlags.signUp}*/}
          {/*    handleClose={handleCloseModals}*/}
          {/*    showLoginModal={handleLoginClick}*/}
          {/*/>*/}
        </Box>
      </ LoginContentsContainer>
  );
}
