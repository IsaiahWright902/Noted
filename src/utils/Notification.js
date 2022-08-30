import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2";
import "sweetalert2/dist/sweetalert2.all";

// Sweet Alert Docs
// https://sweetalert2.github.io/#configuration

export default class Notification {
  static Saved() {
    Swal.fire({
      title: "Saved",
      position: "top-end",
      icon: "success",
      timer: 3000,
      timerProgressBar: true,
      toast: true,
      showConfirmButton: false,
    });
  }

  static async confirm(
    title = "Are you sure you want to delete this note?",
    icon = "warning",
    confirmButtonText = "Yes"
  ) {
    try {
      const res = await Swal.fire({
        title: title,
        icon: icon,
        showCancelButton: true,
        confirmButtonColor: "#2fad59",
        cancelButtonColor: "#f04e4e",
        confirmButtonText: confirmButtonText,
      });
      if (res.isConfirmed) {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }
}
