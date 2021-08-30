class TacosController < ApplicationController

    def index
        render component: "Index", props: {tacos: Taco.all}
    end

    def prices
        render component: "SalePrice", props: {tacos: Taco.all}
    end

    def show
        render component: "Taco", props: {taco: Taco.find(params[:id])}
    end

    def fish
        render component: "ViewSeafood", props: {tacos: Taco.all}
    end

end
