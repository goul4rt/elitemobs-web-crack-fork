# 🧪 Sistema Completo de Potion Effects - EliteMobs

## ✨ Nova Implementação

O sistema de potion effects foi completamente reformulado para suportar a granularidade total do EliteMobs, incluindo todos os campos necessários para criar efeitos complexos e poderosos.

## 🎯 Formato Completo

### Estrutura do Potion Effect
```
potionEffectName,potionEffectLevel,affectedEntity,applicationMethod
```

### Campos Detalhados

#### 1. **potionEffectName** (Nome do Efeito)
- Nome do efeito de poção do Minecraft
- Exemplos: `POISON`, `HEAL`, `NIGHT_VISION`, `SPEED`, `STRENGTH`
- Lista completa disponível no seletor do modal

#### 2. **potionEffectLevel** (Nível do Efeito)
- **Importante**: Efeitos de poção começam no nível 0!
- Range: 0-10
- Nível 0 = efeito básico
- Nível 1+ = efeito mais forte

#### 3. **affectedEntity** (Entidade Afetada)
- **`self`** 🛡️ - O jogador que usa o item
- **`target`** ☠️ - O inimigo que é atingido

#### 4. **applicationMethod** (Método de Aplicação)
- **`onHit`** ⚔️ - Aplicado quando o jogador acerta um inimigo
- **`continuous`** 🔄 - Aplicado constantemente enquanto o item está equipado

## 🎮 Interface do Usuário

### Campos de Entrada
1. **Efeito**: Seletor com todos os efeitos de poção disponíveis
2. **Nível**: Input numérico (0-10, começando em 0)
3. **Alvo**: 
   - 🛡️ Jogador (self)
   - ☠️ Inimigo (target)
4. **Método**:
   - ⚔️ No Hit (onHit)
   - 🔄 Contínuo (continuous)

### Visualização
- Cada efeito mostra o nome, nível e ícones indicativos
- Ícones explicam visualmente como o efeito funciona
- Preview em tempo real no modal e preview flutuante

## 📋 Exemplos Práticos

### 1. **Espada Venenosa**
```yaml
potionEffects:
- "POISON,0,target,onHit"    # Envenena inimigos ao acertar
- "HEAL,1,self,onHit"        # Cura o jogador ao acertar
```

### 2. **Item de Charm (Amuleto)**
```yaml
potionEffects:
- "NIGHT_VISION,0,self,continuous"  # Visão noturna constante
- "SPEED,1,self,continuous"         # Velocidade constante
- "JUMP_BOOST,0,self,continuous"    # Pulo melhorado constante
```

### 3. **Arma de Combate Avançada**
```yaml
potionEffects:
- "POISON,1,target,onHit"           # Veneno forte nos inimigos
- "STRENGTH,0,self,onHit"           # Força ao acertar
- "REGENERATION,0,self,continuous"  # Regeneração constante
- "FIRE_RESISTANCE,0,self,continuous" # Resistência ao fogo
```

## 🎯 Ícones Visuais

### Sistema de Ícones
- **🛡️ Shield**: Efeito aplicado ao jogador (self)
- **☠️ Skull**: Efeito aplicado ao inimigo (target)
- **⚔️ Swords**: Ativado ao acertar (onHit)
- **🔄 Repeating Circle**: Aplicado continuamente (continuous)

### Exemplo de Visualização
```
POISON 0 ☠️ ⚔️    # Envenena inimigos ao acertar
HEAL 1 🛡️ ⚔️      # Cura o jogador ao acertar
SPEED 1 🛡️ 🔄     # Velocidade constante no jogador
```

## 🚀 Funcionalidades Avançadas

### 1. **Combinações Complexas**
- Múltiplos efeitos no mesmo item
- Diferentes alvos e métodos
- Efeitos que se complementam

### 2. **Templates Prontos**
- Templates incluem potion effects configurados
- Exemplo: "Challenger's Sword" com efeitos completos
- Fácil aplicação de configurações testadas

### 3. **Preview Inteligente**
- Preview mostra ícones e formatação
- Explicação visual de como cada efeito funciona
- Detecção automática no editor

## ⚠️ Avisos Importantes

### 1. **INSTANT_DAMAGE**
- **CUIDADO**: `INSTANT_DAMAGE` cura mortos-vivos
- Comportamento padrão do Minecraft
- Use com cautela em servidores com mobs especiais

### 2. **Níveis de Efeito**
- **Lembre-se**: Efeitos começam no nível 0
- Nível 0 = efeito básico
- Níveis altos podem ser muito poderosos

### 3. **Performance**
- Efeitos contínuos consomem mais recursos
- Muitos efeitos simultâneos podem impactar performance
- Teste em servidor antes de usar em produção

## 🔧 Implementação Técnica

### 1. **Formato de Dados**
```typescript
interface PotionEffect {
  name: string;        // Nome do efeito
  level: number;       // Nível (0-10)
  target: "self" | "target";  // Quem é afetado
  method: "onHit" | "continuous";  // Quando é aplicado
}
```

### 2. **Validação**
- Verificação de formato correto
- Validação de níveis (0-10)
- Verificação de alvos e métodos válidos

### 3. **Interface**
- Campos intuitivos com ícones
- Preview em tempo real
- Feedback visual imediato

## 📝 Dicas de Uso

### 1. **Para Armas**
- Use `onHit` para efeitos de combate
- Combine `target` e `self` para equilíbrio
- Exemplo: Veneno no inimigo + cura no jogador

### 2. **Para Charms/Amuletos**
- Use `continuous` para efeitos passivos
- Foque em `self` para benefícios do jogador
- Exemplo: Visão noturna + velocidade constantes

### 3. **Para Itens Especiais**
- Combine múltiplos efeitos
- Use diferentes métodos para variedade
- Teste combinações para equilíbrio

## 🎮 Resultado Final

Com este sistema completo, você pode criar:

1. **Armas Complexas**: Com efeitos de combate sofisticados
2. **Charms Poderosos**: Com benefícios passivos constantes
3. **Itens Únicos**: Com combinações criativas de efeitos
4. **Equipamentos Balanceados**: Com efeitos que se complementam

O sistema oferece a **flexibilidade total** do EliteMobs para criar itens verdadeiramente únicos e poderosos! 🚀 