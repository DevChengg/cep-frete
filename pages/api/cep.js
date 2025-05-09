import { calculaCep } from "@/lib/calculaCep";

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { cep } = req.query;

  if (!cep) {
    return res.status(400).json({ error: 'CEP é obrigatório' });
  }


  const cleanCep = cep.replace(/\D/g, '');

  if (cleanCep.length !== 8) {
    return res.status(400).json({ error: 'CEP inválido. Deve conter 8 dígitos numéricos.' });
  }

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);

    if (!response.ok) {
      return res.status(500).json({error: 'Erro ao consultar o ViaCep.' });
    }

    const data = await response.json();

    if (data.erro || !data.uf) {
      return res.status(400).json({ error: 'CEP não encontrado.' });
    }

    const valor = calculaCep(data.uf);

    return res.status(200).json({
    address: data,
    freight: valor,
    });

  } catch(error){
    console.error('Erro ao consultar o CEP:', error);
    return res.status(500).json({error: 'Erro interno no servidor.' });
  }



}
