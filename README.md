# Aurora Travel

Busca global de viagens: voos, hotéis, passeios — arquitetura premium, pronta para escalar e monetizar.

## Stack
- **Mobile:** React Native + Expo
- **Backend:** Node.js + NestJS
- **Banco:** PostgreSQL
- **Cache:** Redis
- **APIs externas:** Amadeus, Booking/Expedia, Viator/GetYourGuide
- **Auth:** JWT
- **Monetização:** Afiliados, comissão, PRO
- **IA:** Recomendações personalizadas (OpenAI)

## Estrutura
```
aurora-travel/
├── backend/
│   ├── src/
│   │   ├── app.module.ts
│   │   ├── main.ts
│   │   ├── auth/
│   │   ├── flights/
│   │   ├── hotels/
│   │   ├── tours/
│   │   ├── search/
│   │   ├── users/
│   │   ├── plans.ts
│   │   ├── affiliates.ts
│   │   ├── recommendation.service.ts
│   │   └── recommendation.controller.ts
│   ├── package.json
│   └── .env.example
└── mobile/
	├── App.tsx
	├── app.json
	├── screens/
	│   └── Home.tsx
	├── components/
	│   └── Card.tsx
	├── services/
	│   ├── api.ts
	│   └── reco.ts
	└── theme/
		└── tokens.ts
```

## Publicação
- Expo: pronto para build Android/iOS
- Checklist: ícone, splash, screenshots, política de privacidade, afiliados declarados

## Monetização
- Links de afiliados (tracking)
- PRO sem anúncios (feature flag, compra in-app)

## IA de Recomendação
- OpenAI para sugestões personalizadas

---

Pronto para crescer, escalar e monetizar!