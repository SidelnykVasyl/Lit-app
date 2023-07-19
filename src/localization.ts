import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(Backend)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    // backend: {
    //   loadPath: '../locales/{{lng}}/{{ns}}.json',
    // },
    
    resources: {
      en: {
        translation: {
          "welcomeMessage": "Hello!",
          "greeting": "Welcome to my application.",
          "toSubscribePleaseIdentifyYourself": "To subscribe, please identify yourself",
          "individualKimPackageSubscription": "Individual KIM Package Subscription",
          "goalkeeper": "(1 goalkeeper)",
          "accessToTheKimApplication": "Access to the KIM application",
          "unlimitedAccessToTutorialsAndPublicContent": "Unlimited access to tutorials and public content",
          "theIndividualPackageIncludes:": "The individual package includes:",
          "choisissezVotreModeDepaiement": "Choose your payment method:",
          "monthlyPayment": "Monthly payment",
          "annualPayment": "Annual payment",
          "iChooseTheMonthlyPayment": "I choose the monthly payment",
          "iChooseTheAnnualPayment ": "I choose the annual payment",
          "subscribe": "Subscribe",
          "iAlreadyHaveAkimAccount": "I already have a KIM account",
          "iCreateMyAccount": "I create my account",
          "yourEmailAddress": "Your email address",
          "yourPassword": "Your password",
          "notRegistred": "Haven't registered with us yet?",
          "createYourAccountInAFewClicks": "Create your account in a few clicks :",
          "toLogIn": "To log in",
          "createAnAccount": "Create an account",
          "forgotPass": "Forgot your password ?",
          "incorrect": "Invalid E-mail address or password"
        }
      },
       fr: {
        translation: {
          "welcomeMessage": "Bonjour !",
          "greeting": "Bienvenue dans mon application.",
          "toSubscribePleaseIdentifyYourself": "Pour vous abonner, merci de vous identifier",
          "individualKimPackageSubscription": "Abonnement individuel au package KIM",
          "goalkeeper": "(1 gardien de but)",
          "accessToTheKimApplication": "Accès à l'application KIM",
          "unlimitedAccessToTutorialsAndPublicContent": "Accès illimité aux tutoriels et aux contenus publics",
          "theIndividualPackageIncludes:": "Le forfait individuel comprend :",
          "choisissezVotreModeDepaiement": "Choisissez votre mode de paiement :",
          "monthlyPayment": "Paiement mensuel",
          "annualPayment": "Paiement annuel",
          "iChooseTheMonthlyPayment": "Je choisis le paiement mensuel",
          "iChooseTheAnnualPayment": "Je choisis le paiement annuel",
          "subscribe": "S'abonner",
          "iAlreadyHaveAkimAccount": "J'ai déjà un compte KIM",
          "iCreateMyAccount": "Je crée mon compte",
          "yourEmailAddress": "Votre adresse e-mail",
          "yourPassword": "Votre mot de passe",
          "notRegistred": "Pas encore inscrit ?",
          "createYourAccountInAFewClicks": "Créez votre compte en quelques clics :",
          "toLogIn": "Pour vous connecter",
          "createAnAccount": "Créer un compte",
          "forgotPass": "Mot de passe oublié ?",
          "incorrect": "Adresse e-mail ou mot de passe invalide"
        }
      },
    }
  });

export default i18next;
