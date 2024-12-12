import {useState, FormEvent, FC} from "react";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {auth, googleProvider} from "../../../firebase/auth.ts";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  IconButton,
  Box,
  Typography
} from "@mui/material";
import {Google as GoogleIcon} from '@mui/icons-material';
import {useNavigate} from "react-router-dom";

interface LoginModalProps {
  handleClose: () => void;
  show: boolean;
}

const LoginModal: FC<LoginModalProps> = ({handleClose, show}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate()

  /**
   * Googleサインイン用
   */
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      handleClose()
      navigate('/')
    } catch (e) {
      console.error('Google sign-in failed', e);
    }
  };

  /**
   * email + password サインイン用
   */
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      handleClose();
      navigate('/')
    } catch (e) {
      console.error('Email/Password sign-in failed', e);
    }
  };

  return (
      <Dialog open={show} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>ログイン</DialogTitle>

        <DialogContent>
          <Box textAlign="center" mb={2}>
            <Typography variant="body1" mb={2}>
              サインインするには:
            </Typography>

            <IconButton
                onClick={signInWithGoogle}
                style={{color: '#1266f1'}}
            >
              <GoogleIcon fontSize="large"/>
            </IconButton>

            <Typography variant="body1" mt={2} mb={2}>
              または:
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <TextField
                fullWidth
                type="email"
                label="メールアドレス"
                variant="outlined"
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <TextField
                fullWidth
                type="password"
                label="パスワード"
                variant="outlined"
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            <Box textAlign="right" mb={2}>
              <a href="/password/reset" style={{textDecoration: 'none'}}>
                パスワードを忘れてしまった場合
              </a>
            </Box>

            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
            >
            </Button>
          </form>

          <Box textAlign="center" mt={2}>
            <Typography variant="body2">
              アカウントをお持ちではない方&nbsp;&nbsp;&nbsp;
              <Button
                  variant="text"
                  onClick={() => console.log('Show sign up modal')}
              >
                登録する
              </Button>
            </Typography>
          </Box>
        </DialogContent>

        <DialogActions>
          <Button
              onClick={handleClose}
              color="secondary"
          >
            閉じる
          </Button>
        </DialogActions>
      </Dialog>
  );
};

export default LoginModal;