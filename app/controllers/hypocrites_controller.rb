class HypocritesController < ApplicationController
  # GET /hypocrites
  # GET /hypocrites.json
  def index
    @hypocrites = Hypocrite.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @hypocrites }
    end
  end

  # GET /hypocrites/1
  # GET /hypocrites/1.json
  def show
    @hypocrite = Hypocrite.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @hypocrite }
    end
  end

  # GET /hypocrites/new
  # GET /hypocrites/new.json
  def new
    @hypocrite = Hypocrite.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @hypocrite }
    end
  end

  # GET /hypocrites/1/edit
  def edit
    @hypocrite = Hypocrite.find(params[:id])
  end

  # POST /hypocrites
  # POST /hypocrites.json
  def create
    @hypocrite = Hypocrite.new(params[:hypocrite])

    respond_to do |format|
      if @hypocrite.save
        format.html { redirect_to @hypocrite, notice: 'Hypocrite was successfully created.' }
        format.json { render json: @hypocrite, status: :created, location: @hypocrite }
      else
        format.html { render action: "new" }
        format.json { render json: @hypocrite.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /hypocrites/1
  # PUT /hypocrites/1.json
  def update
    @hypocrite = Hypocrite.find(params[:id])

    respond_to do |format|
      if @hypocrite.update_attributes(params[:hypocrite])
        format.html { redirect_to @hypocrite, notice: 'Hypocrite was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @hypocrite.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /hypocrites/1
  # DELETE /hypocrites/1.json
  def destroy
    @hypocrite = Hypocrite.find(params[:id])
    @hypocrite.destroy

    respond_to do |format|
      format.html { redirect_to hypocrites_url }
      format.json { head :no_content }
    end
  end
end
