// 1 - BrowserRouter é o componente que encapsula a sua aplicação, de forma a te possibilitar fazer uso de navegação.

// 2 - Route é o componente fundamental em React Router , que estabelece o mapeamento entre o caminho de URL declarado com o componente. Tal mapeamento, no que diz respeito à correspondência entre o caminho da URL atual e a presente no componente, pode ser feito das seguintes formas, ilustradas pelos seguintes exemplos:

// * <Route path="/about" component={About} /> : lê-se que se o caminho da URL atual do navegador começa com o caminho /about , como declarado na prop path no componente Route , há uma correspondência entre os caminhos da URL e do componente Route , e o componente About será renderizado. Ou seja, se o caminho da URL atual for /home , não há correspondência, logo o componente About não será renderizado. Entretanto, se a URL atual for /about ou /about/me , há correspondência, e o componente About é renderizado. O parâmetro exact entra em ação quando você tem vários caminhos com nomes semelhantes.

// * <Route exact path="/about" component={About} /> : lê-se que, se houver uma correspondência exata entre o caminho da URL atual e o caminho /about declarado em Route , o componente será renderizado. Ou seja, se o caminho da URL atual for /home ou /about/me , não há correspondência exata, logo o componente About não será renderizado. Entretanto, se a URL atual for /about , há correspondência exata, e o componente About será renderizado.

// * OBS : Além dessas duas formas de renderização de componente com Route , você pode fazer uso de elemento children . Ou seja, se você tiver a rota <Route path="/about" component={About} /> , você também poderá fazer da seguinte forma:


<Route path="/about" >
<About />
</Route>


// 3 - Se houver vários componentes apresentando correspondência entre seu caminho de URL e o caminho atual da aplicação, todos os componentes apresentando correspondência serão renderizados . Ou seja, suponha que houvesse a seguinte lista de componentes do tipo Route :


<Route path="/about" component={About} />
<Route path="/contact" component={Contact} />
<Route path="/" component={Home} />

// * Se o caminho atual da URL da aplicação for / , todos esses componentes serão renderizados, haja vista que todas as rotas não fazem correspondência exata entre o caminho da URL atual e o definido via prop path , e fazer path="/" faz correspondência com qualquer caminho de URL ;

// * Agora, se o caminho atual da URL da aplicação for /contact , os componentes Contact e Home serão renderizados. Isso pode ser um problema, e uma forma de atacá-lo é organizar essas rotas via componente Switch .