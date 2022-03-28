#![deny(clippy::all)]

use napi::bindgen_prelude::*;

#[macro_use]
extern crate napi_derive;

pub struct AsyncRandom {}

#[napi]
impl Task for AsyncRandom {
  type Output = Vec<u8>;
  type JsValue = Buffer;

  fn compute(&mut self) -> Result<Self::Output> {
    let mut dest = vec![0u8; 10240];
    getrandom::getrandom(&mut dest).unwrap();
    Ok(dest)
  }

  fn resolve(&mut self, _env: Env, output: Self::Output) -> Result<Self::JsValue> {
    Ok(output.into())
  }
}

#[napi]
pub fn async_random() -> AsyncTask<AsyncRandom> {
  AsyncTask::new(AsyncRandom {})
}
