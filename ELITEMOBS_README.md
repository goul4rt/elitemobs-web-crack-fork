# EliteMobs Item Creator - JSONCrack

## Visão Geral

Esta funcionalidade permite criar itens personalizados para o plugin EliteMobs diretamente no editor JSONCrack. Com uma interface intuitiva, você pode gerar arquivos YAML estruturados para itens especiais do Minecraft.

## Como Usar

### 1. Acessar a Ferramenta
- Abra o editor JSONCrack
- No menu "Tools" (Ferramentas), clique em "EliteMobs Item Creator"

### 2. Usar Templates (Recomendado)
- Selecione um template predefinido na lista
- Ou clique em "Template Aleatório" para gerar um item aleatório
- Os templates incluem configurações completas com lore e encantamentos

### 3. Configurações Básicas
- **Nome do Arquivo**: Nome do arquivo YAML (ex: `espada_lendaria`)
- **Nome de Exibição**: Nome que aparece no jogo (ex: `Espada Lendária`)
- **Material**: Tipo de item do Minecraft (ex: `DIAMOND_SWORD`)
- **Peso de Drop**: Probabilidade de drop (1-10)
- **Tipo**: Categoria do item (unique, scalable, special)

### 4. Configurações Avançadas
- **Escalabilidade**: Se o item escala com o nível do jogador
- **Habilitado**: Se o item está ativo no servidor

### 5. Lore (Descrição)
- Adicione linhas de descrição para o item
- Use códigos de cor do Minecraft (ex: `§6§l` para dourado)
- Pressione Enter para adicionar uma nova linha

### 6. Encantamentos
- Selecione encantamentos da lista do Minecraft
- Exemplos: `DAMAGE_ALL`, `DURABILITY`, `FIRE_ASPECT`

### 7. Campos Opcionais
- **ID do Modelo Customizado**: Para texturas personalizadas
- **Permissão**: Permissão necessária para usar o item

### 8. Gerar YAML
- Clique em "Gerar YAML" para criar o arquivo
- O conteúdo será inserido no editor principal
- Salve o arquivo com extensão `.yml`

## Templates Disponíveis

### 1. Challenger's Sword
- **Material**: DIAMOND_SWORD
- **Tipo**: UNIQUE
- **Encantamentos**: SHARPNESS,5, KNOCKBACK,2, MENDING,1, LIGHTNING,3, SWEEPING_EDGE,1, UNBREAKING,5
- **Especial**: Concedida aos que desafiam a Arena Wood League

### 2. Challenger's Chestplate
- **Material**: DIAMOND_CHESTPLATE
- **Tipo**: UNIQUE
- **Encantamentos**: PROTECTION,5, BLAST_PROTECTION,4, PROJECTILE_PROTECTION,4, MENDING,1, UNBREAKING,5
- **Especial**: Peitoral da Arena Wood League

### 3. Challenger's Helmet
- **Material**: DIAMOND_HELMET
- **Tipo**: UNIQUE
- **Encantamentos**: PROTECTION,5, BLAST_PROTECTION,4, PROJECTILE_PROTECTION,4, MENDING,1, UNBREAKING,5
- **Especial**: Capacete da Arena Wood League

### 4. Challenger's Leggings
- **Material**: DIAMOND_LEGGINGS
- **Tipo**: UNIQUE
- **Encantamentos**: PROTECTION,5, BLAST_PROTECTION,4, PROJECTILE_PROTECTION,4, MENDING,1, UNBREAKING,5
- **Especial**: Calças da Arena Wood League

### 5. Challenger's Boots
- **Material**: DIAMOND_BOOTS
- **Tipo**: UNIQUE
- **Encantamentos**: PROTECTION,5, BLAST_PROTECTION,4, PROJECTILE_PROTECTION,4, MENDING,1, UNBREAKING,5
- **Especial**: Botas da Arena Wood League

### 6. Berserker Charm
- **Material**: TOTEM_OF_UNDYING
- **Tipo**: SPECIAL
- **Encantamentos**: VANISHING_CURSE,1
- **Especial**: Amuleto com poderes especiais em combate

## Estrutura do YAML Gerado

```yaml
isEnabled: true
material: DIAMOND_SWORD
name: '&cChallenger''s Sword'
lore:
- '&2Awarded to those who challenge the'
- '&2Wood League Arena!'
enchantments:
- SHARPNESS,5
- KNOCKBACK,2
- MENDING,1
- LIGHTNING,3
- SWEEPING_EDGE,1
- UNBREAKING,5
potionEffects: []
itemType: UNIQUE
level: 40
```

## Códigos de Cor do Minecraft

- `§0` - Preto
- `§1` - Azul escuro
- `§2` - Verde escuro
- `§3` - Ciano escuro
- `§4` - Vermelho escuro
- `§5` - Roxo escuro
- `§6` - Dourado
- `§7` - Cinza
- `§8` - Cinza escuro
- `§9` - Azul
- `§a` - Verde
- `§b` - Ciano
- `§c` - Vermelho
- `§d` - Rosa
- `§e` - Amarelo
- `§f` - Branco

### Formatação
- `§l` - Negrito
- `§m` - Tachado
- `§n` - Sublinhado
- `§o` - Itálico

## Dicas

1. **Use Templates**: Comece sempre com um template para ter uma base sólida
2. **Cores**: Use códigos de cor para tornar os itens mais atrativos
3. **Balanceamento**: Ajuste o peso de drop para equilibrar o servidor
4. **Permissões**: Defina permissões para itens especiais
5. **Teste**: Sempre teste os itens em um servidor de desenvolvimento

## Suporte

Para dúvidas sobre o EliteMobs, consulte a documentação oficial:
- [EliteMobs Wiki](https://github.com/MagmaGuy/EliteMobs/wiki)
- [Guia de Criação de Itens](https://github.com/MagmaGuy/EliteMobs/wiki/[Guide]-Creating-custom-loot)

## Contribuição

Esta funcionalidade foi desenvolvida para facilitar a criação de itens EliteMobs. Para sugestões ou melhorias, abra uma issue no repositório do JSONCrack. 