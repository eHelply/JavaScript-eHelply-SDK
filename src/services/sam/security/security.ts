import {Logger} from "../../../utils/logger";
import {AxiosInstance, AxiosResponse} from "axios";
import {GetProjectKeysResponse} from "../projects/types/projectResponseTypes";

export default class SecuritySdk {
  axiosClient: AxiosInstance
  logger: Logger

  constructor(axiosClient: AxiosInstance, logger: Logger) {
    this.axiosClient = axiosClient;
    this.logger = logger;
  }

  searchSecurityKeys () {

  }

  getSecurityKey () {

  }

  postSecurityKeyVerify () {

  }

  postCreateSecurityKey () {

  }

  deleteSecurityKey  () {

  }

  getEncryptionKey () {

  }











}
