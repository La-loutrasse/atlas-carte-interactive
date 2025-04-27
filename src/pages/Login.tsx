import AuthForm from '@/components/AuthForm';

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl mb-6 pt-10">Se connecter</h1>
      <AuthForm isRegister={false} />
    </div>
  );
}
