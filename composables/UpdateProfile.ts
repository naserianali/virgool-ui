import {toast} from "vue-sonner";
import {getApiBase, getToken} from "~/composables/Api";

interface IChange {
  message: string;
  otpSent: boolean;
}

export const useChangePhoneRequest = async (phone: string): Promise<boolean> => {
  const url = `${getApiBase()}/user/change-phone`;
  try {
    const response = await $fetch<IChange>(url, {
      method: "PATCH",
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${getToken()}`,
        "Content-Type": "application/json"
      },
      body: {
        phone
      },
      credentials: "include",
    });
    if (response) {
      toast.success(response.message);
      console.log(response)
      return response.otpSent;
    }
    return false;
  } catch (error: any) {
    if (Array.isArray(error.data.message)) {
      error.data.message.map((item: string) => {
        toast.error(item, {
          position: "bottom-right",
        });
      });
    } else {
      toast.error(error.data.message, {
        position: "bottom-right"
      });
    }
    return false;
  }
}
export const useVerifyPhoneRequest = async (code: string): Promise<boolean> => {
  const url = `${getApiBase()}/user/check-phone-otp`;
  try {
    const response = await $fetch<IChange>(url, {
      method: "POST",
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${getToken()}`,
        "Content-Type": "application/json"
      },
      body: {
        code
      },
      credentials: "include",
    });
    if (response) {
      toast.success(response.message);
      console.log(response)
      return false;
    }
    return true;
  } catch (error: any) {
    if (Array.isArray(error.data.message)) {
      error.data.message.map((item: string) => {
        toast.error(item, {
          position: "bottom-right",
        });
      });
    } else {
      toast.error(error.data.message, {
        position: "bottom-right"
      });
    }
  }
  return false;
}
export const useChangeEmailRequest = async (email: string): Promise<boolean> => {
  const url = `${getApiBase()}/user/change-email`;
  try {
    const response = await $fetch<IChange>(url, {
      method: "PATCH",
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${getToken()}`,
        "Content-Type": "application/json"
      },
      body: {
        email
      },
      credentials: "include",
    });
    if (response) {
      toast.success(response.message);
      console.log(response)
      return response.otpSent;
    }
    return false;
  } catch (error: any) {
    if (Array.isArray(error.data.message)) {
      error.data.message.map((item: string) => {
        toast.error(item, {
          position: "bottom-right",
        });
      });
    } else {
      toast.error(error.data.message, {
        position: "bottom-right"
      });
    }
    return false;
  }
}
export const useVerifyEmailRequest = async (code: string): Promise<boolean> => {
  const url = `${getApiBase()}/user/check-email-otp`;
  try {
    const response = await $fetch<IChange>(url, {
      method: "POST",
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${getToken()}`,
        "Content-Type": "application/json"
      },
      body: {
        code
      },
      credentials: "include",
    });
    if (response) {
      toast.success(response.message);
      console.log(response)
      return false;
    }
    return true;
  } catch (error: any) {
    if (Array.isArray(error.data.message)) {
      error.data.message.map((item: string) => {
        toast.error(item, {
          position: "bottom-right",
        });
      });
    } else {
      toast.error(error.data.message, {
        position: "bottom-right"
      });
    }
    return true;
  }
}
export const useUpdateUsernameRequest = async (username: string) => {
  const url = `${getApiBase()}/user/change-username`;
  try {
    const response = await $fetch<IChange>(url, {
      method: "PATCH",
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${getToken()}`,
        "Content-Type": "application/json"
      },
      body:{
        username
      }
    });
    if (response)
      toast.success(response.message)
  } catch (error: any) {
    if (Array.isArray(error.data.message)) {
      error.data.message.map((item: string) => {
        toast.error(item, {
          position: "bottom-right",
        });
      });
    } else {
      toast.error(error.data.message, {
        position: "bottom-right"
      });
    }
  }
}
export const useUpdateBioRequest = async (bio: string) => {
  const url = `${getApiBase()}/user/profile`;
  try {
    const response = await $fetch<IChange>(url, {
      method: "PUT",
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${getToken()}`,
        "Content-Type": "application/json"
      },
      body:{
        bio
      }
    });
    if (response)
      toast.success(response.message)
  } catch (error: any) {
    if (Array.isArray(error.data.message)) {
      error.data.message.map((item: string) => {
        toast.error(item, {
          position: "bottom-right",
        });
      });
    } else {
      toast.error(error.data.message, {
        position: "bottom-right"
      });
    }
  }
}