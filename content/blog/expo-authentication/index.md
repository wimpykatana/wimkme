---
title: 'How to Implement User Authentication in Expo Apps with React Context and Expo Secure Store Library'
date: "2024-09-09T08:00:03.284Z"
description: "When developing mobile applications with Expo, you may need to implement user authentication to secure your app data and features. Expo provides a built-in authentication flow that simplifies the process of adding authentication to your app. In this post, we'll explore how to set up user authentication in an Expo app using the React Context and Expo SecureStore Library."
---

# Introduction to Expo Authentication
When developing mobile applications with Expo, you may need to implement user authentication to secure your app data and features. Expo provides a built-in authentication flow that simplifies the process of adding authentication to your app. In this post, we'll explore how to set up user authentication in an Expo app using the React Context and Expo SecureStore Library.

# Using React Context and Route Groups
We can restrict access to specific routes based on the user's authentication status by using React Context and Route Groups. This approach allows us to organize our routes and control access to them based on the user's authentication status. Consider the following project structure that has a `/sign-in` route that is always accessible and a `(app)` group that requires authentication:
```plaintext
app/
    _layouts.tsx    
    sign-in.tsx     ------------------ Always accessible
    (app)/
        _layouts.tsx
        index.tsx   ------------------ Requires authentication
```

## Setting Up the Context Provider and useStorageState Hook
- **Step 1**: Create a new file named `AuthContext.tsx` in the `contexts` folder.
```tsx
import { useContext, createContext, type PropsWithChildren } from 'react';
import { useStorageState } from '../hooks/useStorageState';

const AuthContext = createContext<{
  signIn: () => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
    const value = useContext(AuthContext);
    if (!value) {
        throw new Error('useSession must be wrapped in a <SessionProvider />');
    }

    return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session');

  return (
    <AuthContext.Provider
      value={{
        signIn: () => {
            // Perform sign-in logic here and set the session token
            setSession('xxx');
        },
        signOut: () => {
            // Perform sign-out logic here and clear the session token
            setSession(null);
        },
        session,
        isLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
```

- **Step 2**: Create a new file named `useStorageState.ts` in the `hooks` folder.
```tsx
import  { useEffect, useCallback, useReducer } from 'react';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

type UseStateHook<T> = [[boolean, T | null], (value: T | null) => void];

function useAsyncState<T>(
  initialValue: [boolean, T | null] = [true, null],
): UseStateHook<T> {
  return useReducer(
    (state: [boolean, T | null], action: T | null = null): [boolean, T | null] => [false, action],
    initialValue
  ) as UseStateHook<T>;
}

export async function setStorageItemAsync(key: string, value: string | null) {
  if (Platform.OS === 'web') {
    try {
      if (value === null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, value);
      }
    } catch (e) {
      console.error('Local storage is unavailable:', e);
    }
  } else {
    if (value == null) {
      await SecureStore.deleteItemAsync(key);
    } else {
      await SecureStore.setItemAsync(key, value);
    }
  }
}

export function useStorageState(key: string): UseStateHook<string> {
  // Public
  const [state, setState] = useAsyncState<string>();

  // Get
  useEffect(() => {
    if (Platform.OS === 'web') {
      try {
        if (typeof localStorage !== 'undefined') {
          setState(localStorage.getItem(key));
        }
      } catch (e) {
        console.error('Local storage is unavailable:', e);
      }
    } else {
      SecureStore.getItemAsync(key).then(value => {
        setState(value);
      });
    }
  }, [key]);

  // Set
  const setValue = useCallback(
    (value: string | null) => {
      setState(value);
      setStorageItemAsync(key, value);
    },
    [key]
  );

  return [state, setValue];
}

```

And your final project structure should look like this:
```plaintext
app/
    _layouts.tsx    
    sign-in.tsx
    (app)/
        _layouts.tsx
        index.tsx
contexts/
    AuthContext.tsx
hooks/
    useStorageState.ts
```

## Implementing the context in your app
- **Step 1** : Update the `app/_layouts.tsx` file in the `app` folder to include the `SessionProvider` component.
```tsx
import { Slot } from 'expo-router';
import { SessionProvider } from '../context/AuthContext';

export default function Root() {
  // Set up the auth context and render our layout inside of it.
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
```
- **Step 2**: Create a file named `app/(app)/_layouts.tsx` file in the `app` folder to include the `useSession` hook.
```tsx
import { Text } from 'react-native';
import { Redirect, Stack } from 'expo-router';

import { useSession } from '../../context/AuthContext';

export default function AppLayout() {
  const { session, isLoading } = useSession();

    // Show a loading indicator while the session is being checked
    if (isLoading) {
        return <Text>Loading...</Text>;
    }

    // Redirect to the sign-in page if the user is not authenticated
    if (!session) {
        return <Redirect href="/sign-in" />;
    }

    return <Stack />;
}
```
- **Step 3**: Create a file named `app/sign-in.tsx` file in the `app` folder to include the `AppLayout` component.
```tsx
import { router } from 'expo-router';
import { Text, View } from 'react-native';

import { useSession } from '../context/AuthContext';

export default function SignIn() {
  const { signIn } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        onPress={() => {
          signIn();
          // Redirect to the app home page after signing in
          router.replace('/');
        }}>
        Sign In
      </Text>
    </View>
  );
}

```

- **Step 4**: Create a file named `app/(app)/index.tsx` file in the `app` folder to include the `AppLayout` component.
```tsx
import { Text, View } from 'react-native';

import { useSession } from '../../ctx';

export default function Index() {
  const { signOut } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        onPress={() => {
          // Perform sign-out here and clear the session token
          signOut();
        }}>
        Sign Out
      </Text>
    </View>
  );
}
```

# Conclusion
In this post, we explored how to implement user authentication in Expo apps using React Context and the Expo Secure Store library. By using React Context and Route Groups, we can organize our routes and control access to them based on the user's authentication status. This approach provides a flexible and scalable way to add authentication to your Expo apps. I hope you found this tutorial helpful and can apply these concepts to your own projects. Happy coding!