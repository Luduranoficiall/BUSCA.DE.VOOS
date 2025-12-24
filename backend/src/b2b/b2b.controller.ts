import { Request, Response } from 'express';

export async function reportHandler(req: Request, res: Response) {
  // Aqui você pode salvar o relatório, enviar para banco, etc.
  // Exemplo: apenas retorna o que recebeu
  res.json({ status: 'ok', received: req.body });
}
