# Firebase Analytics (Mobile)

1. Crie um projeto no [Firebase Console](https://console.firebase.google.com/).
2. Adicione o app Android/iOS.
3. Instale:
   ```bash
   npx expo install expo-firebase-analytics
   ```
4. Use os serviços em `services/analytics.ts` para logar eventos:
   - `logSearch(origin, destination)`
   - `logAffiliateClick(partner, userId)`
