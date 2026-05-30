describe('Evaluación de la aplicación - Equipo 23', () => {

  // PRUEBA 1: Footer
  it('1. Debe mostrar los nombres de todos los miembros del equipo en el footer', () => {
    cy.visit('/'); 
    
    cy.get('footer')
      .should('contain.text', 'Ivan Serrano')
      .and('contain.text', 'Joaquín Tolós')
      .and('contain.text', 'Ramón Alarcón')
      .and('contain.text', 'Miguel Garfia')
      .and('contain.text', 'Guillermo Murciano');
  });

  // PRUEBA 2: Sección About
  it('2. Debe mostrar en /about el número de equipo, nombres y aportaciones', () => {
    cy.visit('/about');

    // Comprobamos el número de equipo
    cy.get('#info').should('contain.text', 'equipo nº 23');

    // Comprobamos que están los nombres y una descripción de su aportación
    cy.contains('Ivan Serrano').parent().should('contain.text', 'Configuración inicial de la base de datos MySQL');
    cy.contains('Joaquín Tolós').parent().should('contain.text', 'Desarrollo del backend en Node.js');
    cy.contains('Ramón Alarcón').parent().should('contain.text', 'Diseño de la interfaz y estilos CSS');
    cy.contains('Miguel Garfia').parent().should('contain.text', 'Integración del mapa y geolocalización');
    cy.contains('Guillermo Murciano').parent().should('contain.text', 'Implementación de pruebas con Cypress');
  });

    // PRUEBA 3: Mejora en los filtros (Botón de limpiar filtros)
    it('3. Debe permitir seleccionar un combustible y usar la mejora de "Limpiar Filtros"', () => {
    // 1. Navegamos al buscador
    cy.visit('/');
    cy.get('a.buscador').click();

    // 2. Seleccionamos un tipo de combustible
    cy.get('.fuel-filters select').eq(2).select('Precio Gasoleo A'); // .eq(2) coge el tercer select (combustible)
    cy.get('.fuel-filters select').eq(2).should('have.value', 'Precio Gasoleo A');

    // 3. Probamos LA MEJORA: Hacemos clic en el nuevo botón de limpiar
    cy.get('.clear-filters-btn').click();

    // 4. Comprobamos que el filtro ha vuelto a su estado por defecto (vacío)
    cy.get('.fuel-filters select').eq(2).should('have.value', '');
    });

});