import { View } from 'react-native';
import HomeComp from './HomeComp';
import RegisterComp from './RegisterComp';
import LoginComp from './LoginComp';
import { NativeRouter, Routes, Route } from 'react-router-native';
import BooksComp from './features/books/BooksComp';
import AddBookComp from './features/books/AddBookComp';
import EditBookComp from './features/books/EditBookComp';
import NoMatch from './NoMatch';
import { AuthProvider } from './contexts/auth/auth-context';
import { ProtectedRoute } from './features/protected-route';
import { BooksProvider } from './contexts/books/books-context';
import AddUserComp from './features/users/AddUserComp';
import UsersComp from './features/users/UsersComp';
import EditUserComp from './features/users/EditUserComp';
import { UsersProvider } from "./contexts/users/users-context";

export default function App() {
  return (
    <NativeRouter>
      <AuthProvider>
        <BooksProvider>
          <UsersProvider><View>
            <Routes>
              <Route
                path='/'
                element={
                  <ProtectedRoute>
                    <HomeComp />
                  </ProtectedRoute>
                }
              >
                <Route
                  index
                  element={
                    <ProtectedRoute>
                      <BooksComp />
                    </ProtectedRoute>
                  }
                ></Route>
                <Route
                  path='add-book'
                  element={
                    <ProtectedRoute>
                      <AddBookComp />
                    </ProtectedRoute>
                  }
                ></Route>
                <Route
                  path='edit-book/:id'
                  element={
                    <ProtectedRoute>
                      <EditBookComp />
                    </ProtectedRoute>
                  }
                ></Route>
                <Route
                  path='books'
                  element={
                    <ProtectedRoute>
                      <BooksComp />
                    </ProtectedRoute>
                  }
                ></Route>
                <Route
                  path='add-user'
                  element={
                    <ProtectedRoute>
                      <AddUserComp />
                    </ProtectedRoute>
                  }
                ></Route>
                <Route
                  path='edit-user/:id'
                  element={
                    <ProtectedRoute>
                      <EditUserComp />
                    </ProtectedRoute>
                  }
                ></Route>
                <Route
                  path='users'
                  element={
                    <ProtectedRoute>
                      <UsersComp />
                    </ProtectedRoute>
                  }
                ></Route>
              </Route>
              <Route path='/register' element={<RegisterComp />}></Route>
              <Route path='/login' element={<LoginComp />}></Route>
              <Route path='*' element={<NoMatch />} />
            </Routes>
          </View></UsersProvider>
        </BooksProvider>
      </AuthProvider>
    </NativeRouter>
  );
}
