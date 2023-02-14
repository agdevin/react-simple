import {
  Container,
  Grid,
  Box,
  Typography,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button';
import { FC } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { literal, object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from '../components/FormInput';
import {useNavigate } from 'react-router-dom';
import UserService from "../services/user.service";
import axios, {AxiosResponse} from 'axios';
// 👇 Login Schema with Zod
const loginSchema = object({
  username: string().min(1, 'UserName is required'),
  password: string()
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
  persistUser: literal(true).optional(),
});

// 👇 Infer the Schema to get the TS Type
type ILogin = TypeOf<typeof loginSchema>;

const LoginPage: FC = () => {

  const navigate = useNavigate();

  // 👇 Default Values
  const defaultValues: ILogin = {
    username: '',
    password: '',
  };

  // 👇 The object returned from useForm Hook
  const methods = useForm<ILogin>({
    resolver: zodResolver(loginSchema),
    defaultValues,
  });

  // 👇 Submit Handler
  const onSubmitHandler: SubmitHandler<ILogin> = (values: ILogin) => {
    axios.get('http://localhost:8080/admin/users')
      .then((response: AxiosResponse) => {
          console.log(response.data);
    });
  };

  // 👇 JSX to be rendered
  return (
    <Container
      sx={{ height: '90vh', backgroundColor: { xs: '#fff', md: '#fff' } }}
    >
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        sx={{ width: '100%', height: '100%' }}
      >
        <Grid
          item
          sx={{ maxWidth: '30rem', width: '100%', backgroundColor: '#fff' }}
        >
          <FormProvider {...methods}>
            <Grid
              container
              sx={{
                boxShadow: { sm: '0 0 5px #ddd' },
                py: '6rem',
                px: '1rem',
              }}
            >
              <Grid
                item
                container
                justifyContent='space-between'
                sx={{
                  maxWidth: { sm: '25rem' },
                  marginInline: 'auto',
                }}
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                >
                  <Box
                    display='flex'
                    flexDirection='column'
                    component='form'
                    noValidate
                    autoComplete='off'
                    onSubmit={methods.handleSubmit(onSubmitHandler)}
                  >
                    <Typography
                      variant='h6'
                      component='h1'
                      sx={{ textAlign: 'center', mb: '1.5rem' }}
                    >
                      Login Form
                    </Typography>

                    <FormInput
                      label='UserName'
                      type='username'
                      name='username'
                      focused
                      required
                    />
                    <FormInput
                      type='password'
                      label='Password'
                      name='password'
                      required
                      focused
                    />
                    <Box
                      display='flex'
                      flexDirection='row'
                    >
                      <Button
                        variant='contained'
                        onClick={()=>navigate('/', { replace: true })}
                        sx={{
                          py: '0.8rem',
                          mt: 2,
                          width: '30%',
                          marginInline: 'auto',
                          }}
                        >
                        Cancel
                      </Button>
                      <LoadingButton
                        type='submit'
                        variant='contained'
                        sx={{
                          py: '0.8rem',
                          mt: 2,
                          width: '30%',
                          marginInline: 'auto',
                        }}
                      >
                        Login
                      </LoadingButton>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </FormProvider>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;
