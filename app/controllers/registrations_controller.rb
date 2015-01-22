class RegistrationsController < Devise::RegistrationsController

  private

  def sign_up_params
    params.require(:user).permit(:firstname, :lastname, :company, :position, :email, :password, :password_confirmation)
  end
end
