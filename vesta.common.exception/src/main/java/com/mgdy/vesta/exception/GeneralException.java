package com.mgdy.vesta.exception;

/**
 * Created by Jason on 2017/7/3.
 */
public class GeneralException extends RuntimeException  {
    private String retCd ;  //异常对应的返回码
    private String msgDes;  //异常对应的描述信息

    public GeneralException() {
        super();
    }

    public GeneralException(String message) {
        super(message);
        msgDes = message;
    }

    public GeneralException(String retCd, String msgDes) {
        super();
        this.retCd = retCd;
        this.msgDes = msgDes;
    }

    public String getRetCd() {
        return retCd;
    }

    public String getMsgDes() {
        return msgDes;
    }
}
