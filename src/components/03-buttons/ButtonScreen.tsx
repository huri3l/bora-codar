import { Button } from './Button';

export const ButtonScreen = () => {
  return (
    <div className="space-y-16 w-96">
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-4xl text-white">Teste os botões</h1>
        <span className="text-zinc-300">
          Interaja com os botões e observe a mudança de aparência e dos cursores
        </span>
      </div>
      <div className="flex flex-col gap-6">
        <Button>Interaja comigo</Button>
        <Button variant="secondary" disabled>
          Interaja comigo
        </Button>
        <Button variant="secondary">Interaja comigo</Button>
        <Button variant="tertiary" movable>
          Interaja comigo
        </Button>
      </div>
    </div>
  );
};
