import { useState, useEffect } from "react";

export default function TestaCep() {
    const [cep, setCep] = useState('');
    const [resultado, setResultado] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleBuscarCep = async () => {
        if (cep.length !== 8) {
          setError('Digite um CEP com 8 números.');
          return;
        }

            setLoading(true);
            setError('');
            setResultado(null);

            try {
                const res = await fetch(`/api/cep?cep=${cep}`);
                const json = await res.json();

                if (!res.ok) throw new Error(json.error || 'Erro desconhecido');

                setResultado(json);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
    };

    return (
        <div className="p-4">
            <h1 className=" text-xl font-bold mb-4">Consulta de frete por Cep</h1>
            {/* aqui vai entrar o input e as informações */}
            <input
                type="text"
                placeholder="Digite o CEP"
                value={cep}
                onChange={(e) => {
                    const onlyNumbers = e.target.value.replace(/\D/g, '');
                    setCep(onlyNumbers);
                }}
                maxLength={9}
                className="border p-2 rounded w-full"
            ></input>

            <button
                onClick={handleBuscarCep}
                className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                disabled = {loading || cep.length !== 8}
            >
                consultar CEP
            </button>

            

            {loading && <p className="text-blue-500 mt-2">Carregando...</p>}
            {error && <p className="text-red-500 mt-2">{error}</p>}
            {resultado && (
                <div className="mt-4 p-4 border text-black  rounded bg-gray-50">
                    <p><strong>CEP:</strong> {resultado.address.cep}</p>
                    <p><strong>Logradouro:</strong> {resultado.address.logradouro}</p>
                    <p><strong>Cidade:</strong> {resultado.address.localidade} - {resultado.address.uf}</p>
                    <p><strong>Frete estimado:</strong> R$ {resultado.freight},00</p>
                </div>
            )}
        </div>

    );
}