# 🎮 EliteMobs Item Creator - Funcionalidades Avançadas

## ✨ Novas Funcionalidades Implementadas

### 1. 🎯 Ícones Reais do Minecraft
- **Preview Visual**: Agora o modal exibe ícones reais do Minecraft baseado no material selecionado
- **Emojis/Unicode**: Mapeamento completo de materiais para ícones visuais
- **Categorias Suportadas**:
  - ⚔️ Espadas (DIAMOND_SWORD, IRON_SWORD, etc.)
  - 🪓 Machados (DIAMOND_AXE, IRON_AXE, etc.)
  - ⛏️ Ferramentas (PICKAXE, SHOVEL, etc.)
  - 🏹 Arcos (BOW, CROSSBOW)
  - 🪖 Armaduras (HELMET, CHESTPLATE, LEGGINGS, BOOTS)
  - 🛡️ Escudos (SHIELD)
  - 🧪 Poções (POTION, SPLASH_POTION, etc.)
  - 🍎 Comida (APPLE, BREAD, etc.)
  - 💎 Gemas (DIAMOND, EMERALD, etc.)
  - 📚 Itens especiais (BOOK, COMPASS, etc.)

### 2. 🎮 Preview Flutuante no Editor
- **Detecção Automática**: Detecta automaticamente itens EliteMobs no conteúdo do editor
- **Posicionamento**: Preview flutuante no canto superior direito
- **Formatação Minecraft**: Suporte completo a códigos de cor e formatação
- **Informações Exibidas**:
  - Ícone do item baseado no material
  - Nome formatado com cores do Minecraft
  - Lore completo com formatação
  - Encantamentos (primeiros 3 + contador)
  - Efeitos de poção (primeiros 2 + contador)
  - Propriedades do item (tipo, nível, drop, etc.)

### 3. 🎨 Formatação Minecraft Avançada
- **Códigos de Cor**: Suporte completo a &0-&f
- **Formatação**: Bold (&l), Italic (&o), Underline (&n), Strikethrough (&m)
- **Reset**: Reset automático de formatação (&r)
- **Preview em Tempo Real**: Visualização instantânea no modal e preview flutuante

### 4. 📋 Campos Completos EliteMobs
- **Escalabilidade**: Fixed, Limited, Scalable
- **Custom Model ID**: Para texturas personalizadas
- **Custom Model V2**: Suporte ao Minecraft 1.21.4+
- **Permissões**: Sistema de permissões
- **Soulbound**: Itens vinculados ao jogador
- **Habilitado/Desabilitado**: Controle de ativação

## 🚀 Como Usar

### Preview Flutuante
1. Abra o editor JSONCrack
2. Cole ou digite um item EliteMobs em formato YAML
3. O preview aparecerá automaticamente no canto superior direito
4. O preview se atualiza em tempo real conforme você edita

### Ícones no Modal
1. Abra o modal "EliteMobs Item Creator"
2. Selecione um material na lista
3. O ícone aparecerá automaticamente no preview
4. O ícone também aparece no preview flutuante

### Exemplo de Item para Teste
```yaml
isEnabled: true
material: DIAMOND_SWORD
name: '&6&lEspada Lendária do Desafio'
lore:
- '&2Awarded to those who challenge the'
- '&2Wood League Arena!'
- '&7'
- '&eThis sword has been passed down'
- '&ethrough generations of warriors'
enchantments:
- SHARPNESS,5
- KNOCKBACK,2
- MENDING,1
itemType: UNIQUE
level: 1
dropWeight: '1'
scalability: scalable
soulbound: true
```

## 🎯 Benefícios

1. **Visualização Realista**: Veja como o item realmente aparecerá no Minecraft
2. **Feedback Instantâneo**: Preview em tempo real enquanto edita
3. **Facilidade de Uso**: Interface intuitiva com ícones familiares
4. **Compatibilidade Total**: Suporte a todas as funcionalidades do EliteMobs
5. **Formatação Profissional**: Cores e estilos do Minecraft integrados

## 🔧 Tecnologias Utilizadas

- **React**: Componentes reativos
- **TypeScript**: Tipagem segura
- **Mantine**: Interface moderna
- **Styled Components**: Estilização flexível
- **Emojis/Unicode**: Ícones nativos do sistema
- **CSS Custom**: Cores e formatação do Minecraft

## 📝 Notas Técnicas

- O preview flutuante detecta automaticamente itens EliteMobs
- Suporte a parsing de YAML e JSON
- Ícones mapeados para todos os materiais comuns
- Formatação Minecraft convertida automaticamente
- Performance otimizada com renderização condicional 