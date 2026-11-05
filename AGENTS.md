### Code Formatting Rules

When writing or refactoring code, follow these formatting rules:

1. **Keep code concise and clean.** Avoid unnecessary blank lines and excessive line breaks.
2. **Keep JSX props on one line** whenever reasonably readable.
3. **Do not create separate constants or variables** for className strings or simple values unless they are reused or improve readability significantly.
4. **Keep short components and elements compact.** Avoid spreading simple JSX across multiple lines unnecessarily.
5. **Use multiline formatting** for complex logic, long expressions, objects, and functions when readability benefits.
6. **Avoid unnecessary abstractions**, helper functions, wrappers, and components.
7. **Preserve existing functionality, styling, classNames, and behavior** when refactoring.
8. **Use consistent indentation** (4 spaces).
9. **Group related JSX elements** with minimal but meaningful blank lines.
10. **Prioritize readable compact code**, not code compressed into a single line.

### Preferred Style

- Imports: one per line.
- Component declarations: standard multiline format.
- JSX elements with short props: single line.
- Complex JSX: multiline only when necessary.
- No unnecessary constants such as `linkStyle` for one-time usage.
- No excessive blank lines.

**Goal:** Produce production-ready code that is compact, consistent, maintainable, and easy to scan. Do not sacrifice readability just to reduce line count.