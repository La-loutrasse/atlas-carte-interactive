import AuthForm from '@/components/AuthForm';

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl mb-6 pt-10">Créer un compte</h1>
      <AuthForm isRegister={true} />
    </div>
  );
}
