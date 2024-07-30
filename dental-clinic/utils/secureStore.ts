import * as SecureStore from "expo-secure-store";

export async function saveAuthDetails(key: string, value: string) {
  await SecureStore.setItemAsync(key, value);
}

export async function getAuthDetails(key: string): Promise<string | null> {
  return await SecureStore.getItemAsync(key);
}

export async function deleteAuthDetails(key: string) {
  await SecureStore.deleteItemAsync(key);
}
