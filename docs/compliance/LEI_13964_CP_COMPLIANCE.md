# ⚖️ Diretrizes de Admissibilidade Pericial (Lei 13.964/19)

## 1. Contexto Jurídico
A Lei 13.964/2019 (Pacote Anticrime) formalizou o conceito de **Cadeia de Custódia** no Código de Processo Penal brasileiro (Art. 158-A). Em incidentes envolvendo veículos autônomos ou conectados, a integridade da prova digital é o fator determinante para a responsabilização civil e criminal.

## 2. Implementação no Protocolo L1
O GuardDrive atende aos seis estágios da cadeia de custódia através de automação de hardware e software:
- **Reconhecimento**: Detecção automática de eventos inerciais (impactos G > 5).
- **Isolamento**: O dado é assinado localmente no *Secure Element* antes de qualquer processamento externo.
- **Fixação**: Registro de metadados temporais (timestamps UTC) e geográficos invioláveis.
- **Coleta**: Transmissão segura via canal criptografado V2X.
- **Transporte**: Integridade garantida por hashes SHA-256 encadeados.
- **Recebimento**: Registro definitivo em Ledger BaaT para auditoria.

## 3. Incolumidade via Hardware (HSM)
Diferente de sistemas legados baseados em software, a utilização de hardware dedicado impede a **manipulação retroativa**. A prova é "nascida imutável", eliminando a contestabilidade técnica comum em perícias automotivas tradicionais.

---
**Status de Conformidade**: BLINDADO (TRL 6)
**Autoridade**: Protocolo GuardDrive v4.4
